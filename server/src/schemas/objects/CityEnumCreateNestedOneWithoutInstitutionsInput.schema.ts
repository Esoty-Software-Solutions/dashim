import { z } from 'zod';
import { CityEnumCreateWithoutInstitutionsInputObjectSchema } from './CityEnumCreateWithoutInstitutionsInput.schema';
import { CityEnumUncheckedCreateWithoutInstitutionsInputObjectSchema } from './CityEnumUncheckedCreateWithoutInstitutionsInput.schema';
import { CityEnumCreateOrConnectWithoutInstitutionsInputObjectSchema } from './CityEnumCreateOrConnectWithoutInstitutionsInput.schema';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumCreateNestedOneWithoutInstitutionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CityEnumCreateWithoutInstitutionsInputObjectSchema),
          z.lazy(
            () => CityEnumUncheckedCreateWithoutInstitutionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CityEnumCreateOrConnectWithoutInstitutionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CityEnumWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const CityEnumCreateNestedOneWithoutInstitutionsInputObjectSchema =
  Schema;
