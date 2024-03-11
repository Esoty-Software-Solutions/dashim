import { Router, json } from "express";
import { Beneficiary } from "@models/beneficiary.model";

export const beneficiaryRouter = Router();

beneficiaryRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
beneficiaryRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Beneficiary.aggregate(req, input, { bypassMiddleware: true }));
});
beneficiaryRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Beneficiary.findFirst(req, input, { bypassMiddleware: true }));
});
beneficiaryRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Beneficiary.findMany(req, input, { bypassMiddleware: true }));
});
beneficiaryRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    Beneficiary.findMany(req, input),
    Beneficiary.count(req, { where: input?.where }),
    Beneficiary.count(req),
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
beneficiaryRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Beneficiary.findUnique(req, input, { bypassMiddleware: true }));
});
beneficiaryRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await Beneficiary.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
beneficiaryRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Beneficiary.groupBy(req, input, { bypassMiddleware: true }));
});
beneficiaryRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Beneficiary.count(req, input, { bypassMiddleware: true }));
});
beneficiaryRouter.post("/createMany", async (req, res) => {
  res.json(await Beneficiary.createMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryRouter.post("/createOne", async (req, res) => {
  res.json(await Beneficiary.createOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryRouter.post("/deleteMany", async (req, res) => {
  res.json(await Beneficiary.deleteMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryRouter.post("/deleteOne", async (req, res) => {
  res.json(await Beneficiary.deleteOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryRouter.post("/updateMany", async (req, res) => {
  res.json(await Beneficiary.updateMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryRouter.post("/updateOne", async (req, res) => {
  res.json(await Beneficiary.updateOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryRouter.post("/upsert", async (req, res) => {
  res.json(await Beneficiary.upsert(req, req.body, { bypassMiddleware: true }));
});
