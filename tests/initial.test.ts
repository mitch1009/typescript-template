import { sampleService } from '../ishop';

test("greet John", () => {
    const g = sampleService.greet('mitch');
    expect(g).toBe('Hello mitch')
})