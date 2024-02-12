import { z } from 'zod';
import { CityCreateWithoutInstitutionsInputObjectSchema } from './CityCreateWithoutInstitutionsInput.schema';
import { CityUncheckedCreateWithoutInstitutionsInputObjectSchema } from './CityUncheckedCreateWithoutInstitutionsInput.schema';
import { CityCreateOrConnectWithoutInstitutionsInputObjectSchema } from './CityCreateOrConnectWithoutInstitutionsInput.schema';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityCreateNestedOneWithoutInstitutionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CityCreateWithoutInstitutionsInputObjectSchema),
        z.lazy(() => CityUncheckedCreateWithoutInstitutionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CityCreateOrConnectWithoutInstitutionsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => CityWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CityCreateNestedOneWithoutInstitutionsInputObjectSchema = Schema;
