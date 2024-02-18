import { z } from 'zod';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';
import { CityEnumCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumCreateOrConnectWithoutBeneficiaryEntitiesInput> =
  z
    .object({
      where: z.lazy(() => CityEnumWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => CityEnumCreateWithoutBeneficiaryEntitiesInputObjectSchema),
        z.lazy(
          () =>
            CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const CityEnumCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema =
  Schema;
