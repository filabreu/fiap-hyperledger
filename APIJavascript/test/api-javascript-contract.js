/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { ApiJavascriptContract } = require('..');
const winston = require('winston');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

class TestContext {

    constructor() {
        this.stub = sinon.createStubInstance(ChaincodeStub);
        this.clientIdentity = sinon.createStubInstance(ClientIdentity);
        this.logger = {
            getLogger: sinon.stub().returns(sinon.createStubInstance(winston.createLogger().constructor)),
            setLevel: sinon.stub(),
        };
    }

}

describe('ApiJavascriptContract', () => {

    let contract;
    let ctx;

    beforeEach(() => {
        contract = new ApiJavascriptContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"api javascript 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"api javascript 1002 value"}'));
    });

    describe('#apiJavascriptExists', () => {

        it('should return true for a api javascript', async () => {
            await contract.apiJavascriptExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a api javascript that does not exist', async () => {
            await contract.apiJavascriptExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createApiJavascript', () => {

        it('should create a api javascript', async () => {
            await contract.createApiJavascript(ctx, '1003', 'api javascript 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"api javascript 1003 value"}'));
        });

        it('should throw an error for a api javascript that already exists', async () => {
            await contract.createApiJavascript(ctx, '1001', 'myvalue').should.be.rejectedWith(/The api javascript 1001 already exists/);
        });

    });

    describe('#readApiJavascript', () => {

        it('should return a api javascript', async () => {
            await contract.readApiJavascript(ctx, '1001').should.eventually.deep.equal({ value: 'api javascript 1001 value' });
        });

        it('should throw an error for a api javascript that does not exist', async () => {
            await contract.readApiJavascript(ctx, '1003').should.be.rejectedWith(/The api javascript 1003 does not exist/);
        });

    });

    describe('#updateApiJavascript', () => {

        it('should update a api javascript', async () => {
            await contract.updateApiJavascript(ctx, '1001', 'api javascript 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"api javascript 1001 new value"}'));
        });

        it('should throw an error for a api javascript that does not exist', async () => {
            await contract.updateApiJavascript(ctx, '1003', 'api javascript 1003 new value').should.be.rejectedWith(/The api javascript 1003 does not exist/);
        });

    });

    describe('#deleteApiJavascript', () => {

        it('should delete a api javascript', async () => {
            await contract.deleteApiJavascript(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a api javascript that does not exist', async () => {
            await contract.deleteApiJavascript(ctx, '1003').should.be.rejectedWith(/The api javascript 1003 does not exist/);
        });

    });

});
