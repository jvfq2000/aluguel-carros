import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {

    CreateCourseService.execute({
        name: "NodeJS",
        educator: "João",
        duration: 10
    });

    CreateCourseService.execute({
        name: "ReactJS",
        educator: "Vitor",
    });

    return response.send();

}