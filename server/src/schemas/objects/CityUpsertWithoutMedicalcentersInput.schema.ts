import { z } from 'zod';
import { CityUpdateWithoutMedicalcentersInputObjectSchema } from './CityUpdateWithoutMedicalcentersInput.schema';
import { CityUncheckedUpdateWithoutMedicalcentersInputObjectSchema } from './CityUncheckedUpdateWithoutMedicalcentersInput.schema';
import { CityCreateWithoutMedicalcentersInputObjectSchema } from './CityCreateWithoutMedicalcentersInput.schema';
import { CityUncheckedCreateWithoutMedicalcentersInputObjectSchema } from './CityUncheckedCreateWithoutMedicalcentersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityUpsertWithoutMedicalcentersInput> = z
  .object({
    update: z.union([
      z.lazy(() => CityUpdateWithoutMedicalcentersInputObjectSchema),
      z.lazy(() => CityUncheckedUpdateWithoutMedicalcentersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CityCreateWithoutMedicalcentersInputObjectSchema),
      z.lazy(() => CityUncheckedCreateWithoutMedicalcentersInputObjectSchema),
    ]),
  })
  .strict();

export const CityUpsertWithoutMedicalcentersInputObjectSchema = Schema;
