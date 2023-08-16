import { Controller, Get } from '@nestjs/common';
import { DiskService } from 'src/disk/disk.service';
import { CpuService } from 'src/cpu/cpu.service';

@Controller('computer')
export class ComputerController{
    constructor(
        private diskService: DiskService,
        private cpuService: CpuService
        ){}

        @Get()
        run(){
            return[
                this.cpuService.compute(4,3),
                this.diskService.getData()
            ]
        }

        


}
