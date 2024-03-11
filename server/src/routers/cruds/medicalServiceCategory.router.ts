import { Router, json } from "express";
import { MedicalServiceCategory } from "@models/medicalServiceCategory.model";

export const medicalServiceCategoryRouter = Router();

medicalServiceCategoryRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
medicalServiceCategoryRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalServiceCategory.aggregate(req, input, { bypassMiddleware: true }));
});
medicalServiceCategoryRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalServiceCategory.findFirst(req, input, { bypassMiddleware: true }));
});
medicalServiceCategoryRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalServiceCategory.findMany(req, input, { bypassMiddleware: true }));
});
medicalServiceCategoryRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    MedicalServiceCategory.findMany(req, input),
    MedicalServiceCategory.count(req, { where: input?.where }),
    MedicalServiceCategory.count(req),
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
medicalServiceCategoryRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalServiceCategory.findUnique(req, input, { bypassMiddleware: true }));
});
medicalServiceCategoryRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await MedicalServiceCategory.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
medicalServiceCategoryRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalServiceCategory.groupBy(req, input, { bypassMiddleware: true }));
});
medicalServiceCategoryRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalServiceCategory.count(req, input, { bypassMiddleware: true }));
});
medicalServiceCategoryRouter.post("/createMany", async (req, res) => {
  res.json(await MedicalServiceCategory.createMany(req, req.body, { bypassMiddleware: true }));
});
medicalServiceCategoryRouter.post("/createOne", async (req, res) => {
  res.json(await MedicalServiceCategory.createOne(req, req.body, { bypassMiddleware: true }));
});
medicalServiceCategoryRouter.post("/deleteMany", async (req, res) => {
  res.json(await MedicalServiceCategory.deleteMany(req, req.body, { bypassMiddleware: true }));
});
medicalServiceCategoryRouter.post("/deleteOne", async (req, res) => {
  res.json(await MedicalServiceCategory.deleteOne(req, req.body, { bypassMiddleware: true }));
});
medicalServiceCategoryRouter.post("/updateMany", async (req, res) => {
  res.json(await MedicalServiceCategory.updateMany(req, req.body, { bypassMiddleware: true }));
});
medicalServiceCategoryRouter.post("/updateOne", async (req, res) => {
  res.json(await MedicalServiceCategory.updateOne(req, req.body, { bypassMiddleware: true }));
});
medicalServiceCategoryRouter.post("/upsert", async (req, res) => {
  res.json(await MedicalServiceCategory.upsert(req, req.body, { bypassMiddleware: true }));
});
