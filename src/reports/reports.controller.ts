import { Controller, Post, Body, UseGuards, Patch, Param, Get, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from '../guards/auth.guard';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/user.entity';
import { ReportDto } from './dtos/report.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { ApproveReportDto } from './dtos/approve-report.dto';
import { AdminGuard } from '../guards/admin.guard';
import { GetEstimateDto } from './dtos/get-estimate.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Report')
@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @ApiOperation({ summary: 'Get estimate for a car' })
  @ApiResponse({ status: HttpStatus.OK })
  @ApiBody({ type: GetEstimateDto })
  @Get()
  getEstimate(@Query() query: GetEstimateDto) {
    return this.reportsService.createEstimate(query);
  }

  @ApiOperation({ summary: 'Create a report about a sold car' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The report has been successfully created.'})
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.'})
  @ApiBody({
    type: CreateReportDto,
    description: 'Json structure for a report object'
    })
  @Post()
  @UseGuards(AuthGuard)
  @Serialize(ReportDto)
  createReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {
    return this.reportsService.create(body, user);
  }

  @ApiOperation({ summary: 'Approve or disapprove a report' })
  @ApiResponse({ status: HttpStatus.OK})
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.'})
  @ApiBody({type: ApproveReportDto})
  @Patch('/:id')
  @UseGuards(AdminGuard)
  approveReport(@Param('id') id: string, @Body() body: ApproveReportDto) {
    return this.reportsService.changeApproval(id, body.approved);
  }
}
