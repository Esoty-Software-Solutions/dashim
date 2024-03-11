import { Router, json } from "express";
import { FingerprintBiometric } from "@models/fingerprintBiometric.model";

export const fingerprintBiometricRouter = Router();

fingerprintBiometricRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
fingerprintBiometricRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FingerprintBiometric.aggregate(req, input, { bypassMiddleware: true }));
});
fingerprintBiometricRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FingerprintBiometric.findFirst(req, input, { bypassMiddleware: true }));
});
fingerprintBiometricRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FingerprintBiometric.findMany(req, input, { bypassMiddleware: true }));
});
fingerprintBiometricRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    FingerprintBiometric.findMany(req, input),
    FingerprintBiometric.count(req, { where: input?.where }),
    FingerprintBiometric.count(req),
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
fingerprintBiometricRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FingerprintBiometric.findUnique(req, input, { bypassMiddleware: true }));
});
fingerprintBiometricRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await FingerprintBiometric.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
fingerprintBiometricRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FingerprintBiometric.groupBy(req, input, { bypassMiddleware: true }));
});
fingerprintBiometricRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FingerprintBiometric.count(req, input, { bypassMiddleware: true }));
});
fingerprintBiometricRouter.post("/createMany", async (req, res) => {
  res.json(await FingerprintBiometric.createMany(req, req.body, { bypassMiddleware: true }));
});
fingerprintBiometricRouter.post("/createOne", async (req, res) => {
  res.json(await FingerprintBiometric.createOne(req, req.body, { bypassMiddleware: true }));
});
fingerprintBiometricRouter.post("/deleteMany", async (req, res) => {
  res.json(await FingerprintBiometric.deleteMany(req, req.body, { bypassMiddleware: true }));
});
fingerprintBiometricRouter.post("/deleteOne", async (req, res) => {
  res.json(await FingerprintBiometric.deleteOne(req, req.body, { bypassMiddleware: true }));
});
fingerprintBiometricRouter.post("/updateMany", async (req, res) => {
  res.json(await FingerprintBiometric.updateMany(req, req.body, { bypassMiddleware: true }));
});
fingerprintBiometricRouter.post("/updateOne", async (req, res) => {
  res.json(await FingerprintBiometric.updateOne(req, req.body, { bypassMiddleware: true }));
});
fingerprintBiometricRouter.post("/upsert", async (req, res) => {
  res.json(await FingerprintBiometric.upsert(req, req.body, { bypassMiddleware: true }));
});
