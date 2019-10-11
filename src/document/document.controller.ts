import { Controller, Get, Post, Patch, Delete, Param, Body, Response, HttpStatus,UsePipes } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentPipe } from './pipe/document.pipe';
import { AddDocumentDto } from './dto/add-document.dto';

@Controller('document')
export class DocumentController {
    constructor(
        private documentService: DocumentService,
    ) { }
    @Get()
    getAllDocuments(@Response() res) {
        this.documentService.getDocumentData().subscribe(data => {
            res.status(HttpStatus.OK).json(data);
        })
    }


    @Get('/:id')
    getDocument(@Param() param, @Response() res) {
        this.documentService.getDocumentData().subscribe(data => {
            let resData = data.filter(data => data.id === Number(param.id))
            res.status(HttpStatus.OK).json(resData);
        })
    }
    @Post()
    @UsePipes(DocumentPipe)
    addDocument(@Response() res, @Body() document: AddDocumentDto) {
        this.documentService.getDocumentData().subscribe(data => {
            // 做些什麼
            res.status(HttpStatus.CREATED).json(document);
        })

    }

    @Patch('/:id')
    updateDocument(@Param() params, @Response() res, @Body() document) {
        this.documentService.getDocumentData().subscribe(data => {
            // 做些什麼
            res.status(HttpStatus.CREATED).json(document);
        })
    }

    @Delete('/:id')
    deleteDocument(@Param() param, @Response() res) {
        this.documentService.getDocumentData().subscribe(data => {
            // 做些什麼
            res.status(HttpStatus.CREATED).json(document);
        })
    }
}