import { z } from 'zod';
import { CityCreateWithoutMedicalcentersInputObjectSchema } from './CityCreateWithoutMedicalcentersInput.schema';
import { CityUncheckedCreateWithoutMedicalcentersInputObjectSchema } from './CityUncheckedCreateWithoutMedicalcentersInput.schema';
import { CityCreateOrConnectWithoutMedicalcentersInputObjectSchema } from './CityCreateOrConnectWithoutMedicalcentersInput.schema';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityCreateNestedOneWithoutMedicalcentersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CityCreateWithoutMedicalcentersInputObjectSchema),
          z.lazy(
            () => CityUncheckedCreateWithoutMedicalcentersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CityCreateOrConnectWithoutMedicalcentersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CityWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const CityCreateNestedOneWithoutMedicalcentersInputObjectSchema = Schema;
