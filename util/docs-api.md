## 7. Documentação com Swagger (opcional)
Instale o pacote:


> npm install @nestjs/swagger

- Configure no main.ts:

```typescript
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('API de Lugares')
  .setDescription('API com paginação estilo JSON Server')
  .setVersion('1.0')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
```

- Adicione decorators no DTO:

```typescript
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PaginationQueryDto {
  @ApiPropertyOptional({ default: 1, example: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  _page?: number = 1;

  @ApiPropertyOptional({ default: 10, example: 10 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  _limit?: number = 10;
}
```
- Isso fornecerá uma documentação interativa em /api com exemplos dos parâmetros de paginação.