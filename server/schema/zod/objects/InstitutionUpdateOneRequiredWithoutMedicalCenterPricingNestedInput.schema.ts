/* eslint-disable */
import { z } from 'zod';
import { InstitutionCreateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionCreateWithoutMedicalCenterPricingInput.schema';
import { InstitutionUncheckedCreateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionUncheckedCreateWithoutMedicalCenterPricingInput.schema';
import { InstitutionCreateOrConnectWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionCreateOrConnectWithoutMedicalCenterPricingInput.schema';
import { InstitutionUpsertWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionUpsertWithoutMedicalCenterPricingInput.schema';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';
import { InstitutionUpdateToOneWithWhereWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionUpdateToOneWithWhereWithoutMedicalCenterPricingInput.schema';
import { InstitutionUpdateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionUpdateWithoutMedicalCenterPricingInput.schema';
import { InstitutionUncheckedUpdateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionUncheckedUpdateWithoutMedicalCenterPricingInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionUpdateOneRequiredWithoutMedicalCenterPricingNestedInput>;
export const InstitutionUpdateOneRequiredWithoutMedicalCenterPricingNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => InstitutionCreateWithoutMedicalCenterPricingInputObjectSchema),
                z.lazy(() => InstitutionUncheckedCreateWithoutMedicalCenterPricingInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => InstitutionCreateOrConnectWithoutMedicalCenterPricingInputObjectSchema)
            .optional(),
        upsert: z.lazy(() => InstitutionUpsertWithoutMedicalCenterPricingInputObjectSchema).optional(),
        connect: z.lazy(() => InstitutionWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => InstitutionUpdateToOneWithWhereWithoutMedicalCenterPricingInputObjectSchema),
                z.lazy(() => InstitutionUpdateWithoutMedicalCenterPricingInputObjectSchema),
                z.lazy(() => InstitutionUncheckedUpdateWithoutMedicalCenterPricingInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
