/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { InstitutionUpdateOneRequiredWithoutPoliciesNestedInputObjectSchema } from './InstitutionUpdateOneRequiredWithoutPoliciesNestedInput.schema';
import { BenefitPackageUpdateManyWithoutInsurancePolicyNestedInputObjectSchema } from './BenefitPackageUpdateManyWithoutInsurancePolicyNestedInput.schema';
import { InsurancePolicyMedicalCenterUpdateManyWithoutInsurancePolicyNestedInputObjectSchema } from './InsurancePolicyMedicalCenterUpdateManyWithoutInsurancePolicyNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyUpdateWithoutBeneficiaryEntitiesInput>;
export const InsurancePolicyUpdateWithoutBeneficiaryEntitiesInputObjectSchema: SchemaType = z
    .object({
        id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        createdAt: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        isPublished: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
        isSoftDeleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
        isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
        deactivationReason: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        deactivationDate: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
                z.null(),
            ])
            .optional()
            .nullable(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        Accumulatedlimit: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
        BalanceResetDate: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        issueDate: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        renewalDate: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        serviceEntryTimeWindow: z
            .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)])
            .optional(),
        institution: z.lazy(() => InstitutionUpdateOneRequiredWithoutPoliciesNestedInputObjectSchema).optional(),
        benefitPackages: z.lazy(() => BenefitPackageUpdateManyWithoutInsurancePolicyNestedInputObjectSchema).optional(),
        medicalCenters: z
            .lazy(() => InsurancePolicyMedicalCenterUpdateManyWithoutInsurancePolicyNestedInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
