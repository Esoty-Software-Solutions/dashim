import { z } from 'zod';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';
import { CityEnumCreateWithoutMedicalcentersInputObjectSchema } from './CityEnumCreateWithoutMedicalcentersInput.schema';
import { CityEnumUncheckedCreateWithoutMedicalcentersInputObjectSchema } from './CityEnumUncheckedCreateWithoutMedicalcentersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumCreateOrConnectWithoutMedicalcentersInput> =
  z
    .object({
      where: z.lazy(() => CityEnumWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => CityEnumCreateWithoutMedicalcentersInputObjectSchema),
        z.lazy(
          () => CityEnumUncheckedCreateWithoutMedicalcentersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const CityEnumCreateOrConnectWithoutMedicalcentersInputObjectSchema =
  Schema;
