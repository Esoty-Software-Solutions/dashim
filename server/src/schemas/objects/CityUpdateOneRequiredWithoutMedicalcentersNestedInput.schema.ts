import { z } from 'zod';
import { CityCreateWithoutMedicalcentersInputObjectSchema } from './CityCreateWithoutMedicalcentersInput.schema';
import { CityUncheckedCreateWithoutMedicalcentersInputObjectSchema } from './CityUncheckedCreateWithoutMedicalcentersInput.schema';
import { CityCreateOrConnectWithoutMedicalcentersInputObjectSchema } from './CityCreateOrConnectWithoutMedicalcentersInput.schema';
import { CityUpsertWithoutMedicalcentersInputObjectSchema } from './CityUpsertWithoutMedicalcentersInput.schema';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';
import { CityUpdateWithoutMedicalcentersInputObjectSchema } from './CityUpdateWithoutMedicalcentersInput.schema';
import { CityUncheckedUpdateWithoutMedicalcentersInputObjectSchema } from './CityUncheckedUpdateWithoutMedicalcentersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityUpdateOneRequiredWithoutMedicalcentersNestedInput> =
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
      upsert: z
        .lazy(() => CityUpsertWithoutMedicalcentersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CityWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CityUpdateWithoutMedicalcentersInputObjectSchema),
          z.lazy(
            () => CityUncheckedUpdateWithoutMedicalcentersInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const CityUpdateOneRequiredWithoutMedicalcentersNestedInputObjectSchema =
  Schema;
