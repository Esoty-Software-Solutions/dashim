import { Router, json } from "express";
import { MedicalService } from "@models/medicalService.model";

export const medicalServiceRouter = Router();

medicalServiceRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
medicalServiceRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalService.aggregate(req, input, { bypassMiddleware: true }));
});
medicalServiceRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalService.findFirst(req, input, { bypassMiddleware: true }));
});
medicalServiceRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalService.findMany(req, input, { bypassMiddleware: true }));
});
medicalServiceRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    MedicalService.findMany(req, input),
    MedicalService.count(req, { where: input?.where }),
    MedicalService.count(req),
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
medicalServiceRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalService.findUnique(req, input, { bypassMiddleware: true }));
});
medicalServiceRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await MedicalService.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
medicalServiceRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalService.groupBy(req, input, { bypassMiddleware: true }));
});
medicalServiceRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalService.count(req, input, { bypassMiddleware: true }));
});
medicalServiceRouter.post("/createMany", async (req, res) => {
  res.json(await MedicalService.createMany(req, req.body, { bypassMiddleware: true }));
});
medicalServiceRouter.post("/createOne", async (req, res) => {
  res.json(await MedicalService.createOne(req, req.body, { bypassMiddleware: true }));
});
medicalServiceRouter.post("/deleteMany", async (req, res) => {
  res.json(await MedicalService.deleteMany(req, req.body, { bypassMiddleware: true }));
});
medicalServiceRouter.post("/deleteOne", async (req, res) => {
  res.json(await MedicalService.deleteOne(req, req.body, { bypassMiddleware: true }));
});
medicalServiceRouter.post("/updateMany", async (req, res) => {
  res.json(await MedicalService.updateMany(req, req.body, { bypassMiddleware: true }));
});
medicalServiceRouter.post("/updateOne", async (req, res) => {
  res.json(await MedicalService.updateOne(req, req.body, { bypassMiddleware: true }));
});
medicalServiceRouter.post("/upsert", async (req, res) => {
  res.json(await MedicalService.upsert(req, req.body, { bypassMiddleware: true }));
});
