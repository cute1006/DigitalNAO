import { ApiProperty } from "@nestjs/swagger";

export class LoginDto{
    @ApiProperty({description:'Username:'})
    readonly username: string;
    @ApiProperty({description:'Password:'})
    readonly password: string;
} 