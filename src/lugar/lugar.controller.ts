import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { LugarService } from './lugar.service';
import { CreateLugarDto } from './dto/create-lugar.dto';
import { UpdateLugarDto } from './dto/update-lugar.dto';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

//@ApiTags('Lugares api')
@Controller('lugar')
export class LugarController {
  constructor(private readonly lugarService: LugarService) {}

  @ApiOperation({summary: 'used to create places'})
  @ApiResponse({status: 201, description: 'Create Place', type: CreateLugarDto})
  @ApiBadRequestResponse({description:'Bad Payload send'})
  @Post()
  create(@Body() createLugarDto: CreateLugarDto) {
    return this.lugarService.create(createLugarDto);
  }

  @ApiOperation({summary: 'used to get list of all places'})
  //@ApiResponse({status: 200, description: 'list of Places', type: CreateLugarDto})
  @ApiOkResponse({description:'list of all place', type: CreateLugarDto, isArray: true})
  @ApiNotFoundResponse({description:'Not Found'})
  @Get()
  findAll() {
    return this.lugarService.findAll();
  }

  @ApiOperation({summary: 'used to get specific place'})
  @ApiOkResponse({description:'get specific place id', type: CreateLugarDto})
  @ApiNotFoundResponse({description:'Not Found'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lugarService.findOne(+id);
  }

  @ApiOperation({summary: 'used update partials places'})
  @ApiOkResponse({description:'update partial place by id', type: CreateLugarDto})
  @ApiNotFoundResponse({description:'"Bad Request'})
  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updateLugarDto: UpdateLugarDto) {
    return this.lugarService.updatePatch(+id, updateLugarDto);
  }

  @ApiOperation({summary: 'used update places or full data'}) 
  @ApiOkResponse({description:'update place by id', type: CreateLugarDto})
  @ApiNotFoundResponse({description:'"Bad Request'})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateLugarDto: UpdateLugarDto) {
    return this.lugarService.update(+id, updateLugarDto);
  }

  @ApiOperation({summary: 'used delete place'})
  @ApiOkResponse({description:'Delete place sucess', type: CreateLugarDto})
  @ApiNotFoundResponse({description:'"Bad Request'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lugarService.remove(+id);
  }
}
