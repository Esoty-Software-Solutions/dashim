import { z } from 'zod';
import { CityCreateWithoutInstitutionsInputObjectSchema } from './CityCreateWithoutInstitutionsInput.schema';
import { CityUncheckedCreateWithoutInstitutionsInputObjectSchema } from './CityUncheckedCreateWithoutInstitutionsInput.schema';
import { CityCreateOrConnectWithoutInstitutionsInputObjectSchema } from './CityCreateOrConnectWithoutInstitutionsInput.schema';
import { CityUpsertWithoutInstitutionsInputObjectSchema } from './CityUpsertWithoutInstitutionsInput.schema';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';
import { CityUpdateWithoutInstitutionsInputObjectSchema } from './CityUpdateWithoutInstitutionsInput.schema';
import { CityUncheckedUpdateWithoutInstitutionsInputObjectSchema } from './CityUncheckedUpdateWithoutInstitutionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityUpdateOneRequiredWithoutInstitutionsNestedInput> =
  z
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
      upsert: z
        .lazy(() => CityUpsertWithoutInstitutionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CityWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CityUpdateWithoutInstitutionsInputObjectSchema),
          z.lazy(() => CityUncheckedUpdateWithoutInstitutionsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const CityUpdateOneRequiredWithoutInstitutionsNestedInputObjectSchema =
  Schema;
