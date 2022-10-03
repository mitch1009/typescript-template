import { ISampleDto } from "../dto";

 class SampleService implements ISampleDto {
    constructor(){}
    greet(name: string): string {
        return `Hello ${name}`
    }

}

export const sampleService = new SampleService()