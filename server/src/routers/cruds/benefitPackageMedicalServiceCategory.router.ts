import { Router, json } from "express";
import { BenefitPackageMedicalServiceCategory } from "@models/benefitPackageMedicalServiceCategory.model";

export const benefitPackageMedicalServiceCategoryRouter = Router();

benefitPackageMedicalServiceCategoryRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
benefitPackageMedicalServiceCategoryRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BenefitPackageMedicalServiceCategory.aggregate(req, input, { bypassMiddleware: true }));
});
benefitPackageMedicalServiceCategoryRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BenefitPackageMedicalServiceCategory.findFirst(req, input, { bypassMiddleware: true }));
});
benefitPackageMedicalServiceCategoryRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BenefitPackageMedicalServiceCategory.findMany(req, input, { bypassMiddleware: true }));
});
benefitPackageMedicalServiceCategoryRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    BenefitPackageMedicalServiceCategory.findMany(req, input),
    BenefitPackageMedicalServiceCategory.count(req, { where: input?.where }),
    BenefitPackageMedicalServiceCategory.count(req),
  ]);
  const statistics: {
    key: string;
    value: string | number | boolean;
  }[] = [];
  res.json({
    data,
    filteredCount,
    unFilteredCount,
    statistics,
  });
});
benefitPackageMedicalServiceCategoryRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BenefitPackageMedicalServiceCategory.findUnique(req, input, { bypassMiddleware: true }));
});
benefitPackageMedicalServiceCategoryRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await BenefitPackageMedicalServiceCategory.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
benefitPackageMedicalServiceCategoryRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BenefitPackageMedicalServiceCategory.groupBy(req, input, { bypassMiddleware: true }));
});
benefitPackageMedicalServiceCategoryRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BenefitPackageMedicalServiceCategory.count(req, input, { bypassMiddleware: true }));
});
benefitPackageMedicalServiceCategoryRouter.post("/createMany", async (req, res) => {
  res.json(await BenefitPackageMedicalServiceCategory.createMany(req, req.body, { bypassMiddleware: true }));
});
benefitPackageMedicalServiceCategoryRouter.post("/createOne", async (req, res) => {
  res.json(await BenefitPackageMedicalServiceCategory.createOne(req, req.body, { bypassMiddleware: true }));
});
benefitPackageMedicalServiceCategoryRouter.post("/deleteMany", async (req, res) => {
  res.json(await BenefitPackageMedicalServiceCategory.deleteMany(req, req.body, { bypassMiddleware: true }));
});
benefitPackageMedicalServiceCategoryRouter.post("/deleteOne", async (req, res) => {
  res.json(await BenefitPackageMedicalServiceCategory.deleteOne(req, req.body, { bypassMiddleware: true }));
});
benefitPackageMedicalServiceCategoryRouter.post("/updateMany", async (req, res) => {
  res.json(await BenefitPackageMedicalServiceCategory.updateMany(req, req.body, { bypassMiddleware: true }));
});
benefitPackageMedicalServiceCategoryRouter.post("/updateOne", async (req, res) => {
  res.json(await BenefitPackageMedicalServiceCategory.updateOne(req, req.body, { bypassMiddleware: true }));
});
benefitPackageMedicalServiceCategoryRouter.post("/upsert", async (req, res) => {
  res.json(await BenefitPackageMedicalServiceCategory.upsert(req, req.body, { bypassMiddleware: true }));
});
