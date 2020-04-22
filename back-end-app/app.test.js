const request = require("supertest");
const app = require("./app");

describe("Test the root path", () => {
  test("It should responsd to the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe('Test students api', () => {
    test('GET /students should return 200', async () => {
        const response = await request(app).get('/api/students');
        expect(response.statusCode).toBe(200);
    })
    test('students have id, first_name and last_name', async () => {
        const response = await request(app).get('/api/students');
        response.body.forEach(student =>
            expect(student).toEqual(expect.objectContaining({
                id: expect.any(Number),
                first_name: expect.any(String),
                last_name: expect.any(String),
            }))
        )
    })
})

describe('Test grades api', () => {
    test('GET /grades should return 200', async () => {
        const response = await request(app).get('/api/grades');
        expect(response.statusCode).toBe(200);
    })
    test('grades have id, student_id, assignment, score_received and score_possible', async () => {
        const response = await request(app).get('/api/grades');
        response.body.forEach(student =>
            expect(student).toEqual(expect.objectContaining({
                id: expect.any(Number),
                student_id: expect.any(Number),
                assignment: expect.any(String),
                score_received: expect.any(Number),
                score_possible: expect.any(Number),
            }))
        )
    })
})