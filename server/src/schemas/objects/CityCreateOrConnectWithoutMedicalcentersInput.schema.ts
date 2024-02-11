import { z } from 'zod';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';
import { CityCreateWithoutMedicalcentersInputObjectSchema } from './CityCreateWithoutMedicalcentersInput.schema';
import { CityUncheckedCreateWithoutMedicalcentersInputObjectSchema } from './CityUncheckedCreateWithoutMedicalcentersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityCreateOrConnectWithoutMedicalcentersInput> =
  z
    .object({
      where: z.lazy(() => CityWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => CityCreateWithoutMedicalcentersInputObjectSchema),
        z.lazy(() => CityUncheckedCreateWithoutMedicalcentersInputObjectSchema),
      ]),
    })
    .strict();

export const CityCreateOrConnectWithoutMedicalcentersInputObjectSchema = Schema;
