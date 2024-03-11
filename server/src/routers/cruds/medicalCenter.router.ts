import { Router, json } from "express";
import { MedicalCenter } from "@models/medicalCenter.model";

export const medicalCenterRouter = Router();

medicalCenterRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
medicalCenterRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalCenter.aggregate(req, input, { bypassMiddleware: true }));
});
medicalCenterRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalCenter.findFirst(req, input, { bypassMiddleware: true }));
});
medicalCenterRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalCenter.findMany(req, input, { bypassMiddleware: true }));
});
medicalCenterRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    MedicalCenter.findMany(req, input),
    MedicalCenter.count(req, { where: input?.where }),
    MedicalCenter.count(req),
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
medicalCenterRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalCenter.findUnique(req, input, { bypassMiddleware: true }));
});
medicalCenterRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await MedicalCenter.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
medicalCenterRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalCenter.groupBy(req, input, { bypassMiddleware: true }));
});
medicalCenterRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await MedicalCenter.count(req, input, { bypassMiddleware: true }));
});
medicalCenterRouter.post("/createMany", async (req, res) => {
  res.json(await MedicalCenter.createMany(req, req.body, { bypassMiddleware: true }));
});
medicalCenterRouter.post("/createOne", async (req, res) => {
  res.json(await MedicalCenter.createOne(req, req.body, { bypassMiddleware: true }));
});
medicalCenterRouter.post("/deleteMany", async (req, res) => {
  res.json(await MedicalCenter.deleteMany(req, req.body, { bypassMiddleware: true }));
});
medicalCenterRouter.post("/deleteOne", async (req, res) => {
  res.json(await MedicalCenter.deleteOne(req, req.body, { bypassMiddleware: true }));
});
medicalCenterRouter.post("/updateMany", async (req, res) => {
  res.json(await MedicalCenter.updateMany(req, req.body, { bypassMiddleware: true }));
});
medicalCenterRouter.post("/updateOne", async (req, res) => {
  res.json(await MedicalCenter.updateOne(req, req.body, { bypassMiddleware: true }));
});
medicalCenterRouter.post("/upsert", async (req, res) => {
  res.json(await MedicalCenter.upsert(req, req.body, { bypassMiddleware: true }));
});
