import { Request, Response } from 'express';
import { COURSES, PRODUCTS } from './db-data';

export function getAllProducts(req: Request, res: Response) {
  console.log('Retrieving products data ...');

  setTimeout(() => {
    res.status(200).json({ payload: Object.values(PRODUCTS) });
  }, 1000);
}

export function getCourseByUrl(req: Request, res: Response) {
  const courseUrl = req.params['courseUrl'];

  const courses: any = Object.values(COURSES);

  const course = courses.find((course) => course.url == courseUrl);

  setTimeout(() => {
    res.status(200).json(course);
  }, 1000);
}
