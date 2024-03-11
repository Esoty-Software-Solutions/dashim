import { Router, json } from "express";
import { InsurancePolicyMedicalCenter } from "@models/insurancePolicyMedicalCenter.model";

export const insurancePolicyMedicalCenterRouter = Router();

insurancePolicyMedicalCenterRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
insurancePolicyMedicalCenterRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InsurancePolicyMedicalCenter.aggregate(req, input, { bypassMiddleware: true }));
});
insurancePolicyMedicalCenterRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InsurancePolicyMedicalCenter.findFirst(req, input, { bypassMiddleware: true }));
});
insurancePolicyMedicalCenterRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InsurancePolicyMedicalCenter.findMany(req, input, { bypassMiddleware: true }));
});
insurancePolicyMedicalCenterRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    InsurancePolicyMedicalCenter.findMany(req, input),
    InsurancePolicyMedicalCenter.count(req, { where: input?.where }),
    InsurancePolicyMedicalCenter.count(req),
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
insurancePolicyMedicalCenterRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InsurancePolicyMedicalCenter.findUnique(req, input, { bypassMiddleware: true }));
});
insurancePolicyMedicalCenterRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await InsurancePolicyMedicalCenter.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
insurancePolicyMedicalCenterRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InsurancePolicyMedicalCenter.groupBy(req, input, { bypassMiddleware: true }));
});
insurancePolicyMedicalCenterRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InsurancePolicyMedicalCenter.count(req, input, { bypassMiddleware: true }));
});
insurancePolicyMedicalCenterRouter.post("/createMany", async (req, res) => {
  res.json(await InsurancePolicyMedicalCenter.createMany(req, req.body, { bypassMiddleware: true }));
});
insurancePolicyMedicalCenterRouter.post("/createOne", async (req, res) => {
  res.json(await InsurancePolicyMedicalCenter.createOne(req, req.body, { bypassMiddleware: true }));
});
insurancePolicyMedicalCenterRouter.post("/deleteMany", async (req, res) => {
  res.json(await InsurancePolicyMedicalCenter.deleteMany(req, req.body, { bypassMiddleware: true }));
});
insurancePolicyMedicalCenterRouter.post("/deleteOne", async (req, res) => {
  res.json(await InsurancePolicyMedicalCenter.deleteOne(req, req.body, { bypassMiddleware: true }));
});
insurancePolicyMedicalCenterRouter.post("/updateMany", async (req, res) => {
  res.json(await InsurancePolicyMedicalCenter.updateMany(req, req.body, { bypassMiddleware: true }));
});
insurancePolicyMedicalCenterRouter.post("/updateOne", async (req, res) => {
  res.json(await InsurancePolicyMedicalCenter.updateOne(req, req.body, { bypassMiddleware: true }));
});
insurancePolicyMedicalCenterRouter.post("/upsert", async (req, res) => {
  res.json(await InsurancePolicyMedicalCenter.upsert(req, req.body, { bypassMiddleware: true }));
});
