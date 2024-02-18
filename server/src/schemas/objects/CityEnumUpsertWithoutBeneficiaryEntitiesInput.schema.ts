import { z } from 'zod';
import { CityEnumUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUpdateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUncheckedUpdateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumUpsertWithoutBeneficiaryEntitiesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => CityEnumUpdateWithoutBeneficiaryEntitiesInputObjectSchema),
        z.lazy(
          () =>
            CityEnumUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => CityEnumCreateWithoutBeneficiaryEntitiesInputObjectSchema),
        z.lazy(
          () =>
            CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const CityEnumUpsertWithoutBeneficiaryEntitiesInputObjectSchema = Schema;
