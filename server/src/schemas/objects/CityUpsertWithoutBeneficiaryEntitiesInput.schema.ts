import { z } from 'zod';
import { CityUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityUpdateWithoutBeneficiaryEntitiesInput.schema';
import { CityUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityUncheckedUpdateWithoutBeneficiaryEntitiesInput.schema';
import { CityCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityUpsertWithoutBeneficiaryEntitiesInput> = z
  .object({
    update: z.union([
      z.lazy(() => CityUpdateWithoutBeneficiaryEntitiesInputObjectSchema),
      z.lazy(
        () => CityUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => CityCreateWithoutBeneficiaryEntitiesInputObjectSchema),
      z.lazy(
        () => CityUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const CityUpsertWithoutBeneficiaryEntitiesInputObjectSchema = Schema;
