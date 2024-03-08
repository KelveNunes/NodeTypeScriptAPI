import { SetupServer } from '@src/server';
import supertest, { SuperTest, Test } from 'supertest'; // Import SuperTest and Test types from 'supertest'


beforeAll(() => {
    const server = new SetupServer();
    server.init();
    global.testRequest = supertest(server.getApp()) as unknown as SuperTest<Test>; // Cast the result of supertest() to SuperTest<Test>
})