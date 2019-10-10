import { Controller, Get, Post, Patch, Delete, Param, Body, Response, HttpStatus } from '@nestjs/common';
import { DocumentService } from './document.service';

@Controller('document')
export class DocumentController {
    constructor(
        private documentService: DocumentService,
    ) { }
    data = [
        {
            name: '存有與虛無',
            author: '沙特',
            id: 1
        },
        {
            name: '單子論',
            author: '萊布尼茲',
            id: 2
        },
        {
            name: '物不遷論',
            author: '僧肇',
            id: 3
        },
        {
            name: '道德經',
            author: '老子',
            id: 4
        }
    ]
    @Get()
    getAllDocuments(@Response() res) {
        res.status(HttpStatus.OK).json(this.data);
    }


    @Get('/:id')
    getDocument(@Param() param, @Response() res) {
        let resData = this.data.filter(data => data.id === Number(param.id))
        res.status(HttpStatus.OK).json(resData);
    }
    @Post()
    addDocument(@Response() res, @Body() document) {
        // 做些什麼
        res.status(HttpStatus.CREATED).json(document);
    }

    @Patch('/:id')
    updateDocument(@Param() params, @Response() res, @Body() document) {
        // 做些什麼
        res.status(HttpStatus.OK).json(document);
    }

    @Delete('/:id')
    deleteDocument(@Param() param, @Response() res) {
        // 做些什麼
        res.status(HttpStatus.OK).json(document);
    }
}