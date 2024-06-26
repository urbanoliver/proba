import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { Parfum } from "../entity/Parfum";



export class ParfumController extends Controller{

    repository = AppDataSource.getRepository(Parfum);
}