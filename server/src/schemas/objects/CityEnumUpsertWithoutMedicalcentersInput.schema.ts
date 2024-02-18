import { z } from 'zod';
import { CityEnumUpdateWithoutMedicalcentersInputObjectSchema } from './CityEnumUpdateWithoutMedicalcentersInput.schema';
import { CityEnumUncheckedUpdateWithoutMedicalcentersInputObjectSchema } from './CityEnumUncheckedUpdateWithoutMedicalcentersInput.schema';
import { CityEnumCreateWithoutMedicalcentersInputObjectSchema } from './CityEnumCreateWithoutMedicalcentersInput.schema';
import { CityEnumUncheckedCreateWithoutMedicalcentersInputObjectSchema } from './CityEnumUncheckedCreateWithoutMedicalcentersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumUpsertWithoutMedicalcentersInput> = z
  .object({
    update: z.union([
      z.lazy(() => CityEnumUpdateWithoutMedicalcentersInputObjectSchema),
      z.lazy(
        () => CityEnumUncheckedUpdateWithoutMedicalcentersInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => CityEnumCreateWithoutMedicalcentersInputObjectSchema),
      z.lazy(
        () => CityEnumUncheckedCreateWithoutMedicalcentersInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const CityEnumUpsertWithoutMedicalcentersInputObjectSchema = Schema;
