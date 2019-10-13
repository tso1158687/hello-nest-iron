import { Controller, Get, Post, Patch, Delete, Param, Body, Response, HttpStatus, UsePipes,HttpException } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentPipe } from './pipe/document.pipe';
import { AddDocumentDto } from './dto/add-document.dto';
import { ParseIntPipe } from './pipe/parse-int.pipe';
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
        // throw new HttpException({
        //     status: '朕知道了',
        //     error: '錯誤訊息',
        //   },404);
    }


    @Get('/:id')
    getDocument(@Param('id', new ParseIntPipe()) id, @Response() res) {
        this.documentService.getDocumentData().subscribe(data => {
            let resData = data.filter(data => data.id === id)
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