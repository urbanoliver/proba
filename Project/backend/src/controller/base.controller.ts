import { Repository } from "typeorm";

export abstract class Controller{

    repository: Repository<any>

    getAll = async (req, res) => {

        try{
            const entities = await this.repository.find();

            res.json(entities);

        }catch (err){
            this.handleError(res,err);
        }

    };

    getAllFieldsData = async (req, res, fields) => {
        try {
            const entities = await this.repository.find();
    
            
            const fieldsData = entities.map(entity => {
                const data = {};
                fields.forEach(field => {
                    data[field] = entity[field];
                });
                return data;
            });
    
            res.json(fieldsData);
        } catch (err) {
            this.handleError(res, err);
        }
    };
    
    getOne = async (req, res) => {

        try{

            const id = req.params.id;

            const entity = await this.repository.findOneBy({ id: id });

            if(!entity){
                return this.handleError(res, null, 404, 'Entity not found');
            }

            res.json(entity);

        }catch (err){
            this.handleError(res,err);
        }

    };



    create = async (req, res) => {

        try{

            const entity = this.repository.create(req.body as object);

            delete entity.id;

            const saveEntity = await this.repository.save(entity);

            res.json(saveEntity);

        }catch (err){
            this.handleError(res,err);
        }

    };

    update = async (req, res) => {

        try{
            const entity = this.repository.create(req.body as object);

            const currentEntity = await this.repository.findOneBy({ id: entity.id });

            if(!currentEntity){
                return this.handleError(res, null, 404, 'Entity not found');
            }

            await this.repository.save(entity);

            res.json(entity);

        }catch (err){
            this.handleError(res,err);
        }

    };

    delete = async (req, res) => {

        try{

            const id = req.params.id;

            const entity = await this.repository.findOneBy({ id: id });

            if(!entity){
                return this.handleError(res, null, 404, 'Entity not found');
            }

            await this.repository.remove(entity);

            res.send();



        }catch (err){
            this.handleError(res,err);
        }

    };

    handleError = (res, err, status = 500, message = 'Internal server error' ) => {

        if(err){

            console.error(err);
        }

        res.status(status).json({ error: message });
    }


}