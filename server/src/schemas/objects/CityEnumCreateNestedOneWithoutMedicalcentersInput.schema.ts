import { z } from 'zod';
import { CityEnumCreateWithoutMedicalcentersInputObjectSchema } from './CityEnumCreateWithoutMedicalcentersInput.schema';
import { CityEnumUncheckedCreateWithoutMedicalcentersInputObjectSchema } from './CityEnumUncheckedCreateWithoutMedicalcentersInput.schema';
import { CityEnumCreateOrConnectWithoutMedicalcentersInputObjectSchema } from './CityEnumCreateOrConnectWithoutMedicalcentersInput.schema';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumCreateNestedOneWithoutMedicalcentersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CityEnumCreateWithoutMedicalcentersInputObjectSchema),
          z.lazy(
            () => CityEnumUncheckedCreateWithoutMedicalcentersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => CityEnumCreateOrConnectWithoutMedicalcentersInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => CityEnumWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const CityEnumCreateNestedOneWithoutMedicalcentersInputObjectSchema =
  Schema;
