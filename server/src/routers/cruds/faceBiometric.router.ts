import { Router, json } from "express";
import { FaceBiometric } from "@models/faceBiometric.model";

export const faceBiometricRouter = Router();

faceBiometricRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
faceBiometricRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FaceBiometric.aggregate(req, input, { bypassMiddleware: true }));
});
faceBiometricRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FaceBiometric.findFirst(req, input, { bypassMiddleware: true }));
});
faceBiometricRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FaceBiometric.findMany(req, input, { bypassMiddleware: true }));
});
faceBiometricRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    FaceBiometric.findMany(req, input),
    FaceBiometric.count(req, { where: input?.where }),
    FaceBiometric.count(req),
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
faceBiometricRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FaceBiometric.findUnique(req, input, { bypassMiddleware: true }));
});
faceBiometricRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await FaceBiometric.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
faceBiometricRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FaceBiometric.groupBy(req, input, { bypassMiddleware: true }));
});
faceBiometricRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FaceBiometric.count(req, input, { bypassMiddleware: true }));
});
faceBiometricRouter.post("/createMany", async (req, res) => {
  res.json(await FaceBiometric.createMany(req, req.body, { bypassMiddleware: true }));
});
faceBiometricRouter.post("/createOne", async (req, res) => {
  res.json(await FaceBiometric.createOne(req, req.body, { bypassMiddleware: true }));
});
faceBiometricRouter.post("/deleteMany", async (req, res) => {
  res.json(await FaceBiometric.deleteMany(req, req.body, { bypassMiddleware: true }));
});
faceBiometricRouter.post("/deleteOne", async (req, res) => {
  res.json(await FaceBiometric.deleteOne(req, req.body, { bypassMiddleware: true }));
});
faceBiometricRouter.post("/updateMany", async (req, res) => {
  res.json(await FaceBiometric.updateMany(req, req.body, { bypassMiddleware: true }));
});
faceBiometricRouter.post("/updateOne", async (req, res) => {
  res.json(await FaceBiometric.updateOne(req, req.body, { bypassMiddleware: true }));
});
faceBiometricRouter.post("/upsert", async (req, res) => {
  res.json(await FaceBiometric.upsert(req, req.body, { bypassMiddleware: true }));
});
