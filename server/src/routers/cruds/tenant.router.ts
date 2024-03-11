import { Router, json } from "express";
import { Tenant } from "@models/tenant.model";

export const tenantRouter = Router();

tenantRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
tenantRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Tenant.aggregate(req, input, { bypassMiddleware: true }));
});
tenantRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Tenant.findFirst(req, input, { bypassMiddleware: true }));
});
tenantRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Tenant.findMany(req, input, { bypassMiddleware: true }));
});
tenantRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    Tenant.findMany(req, input),
    Tenant.count(req, { where: input?.where }),
    Tenant.count(req),
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
tenantRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Tenant.findUnique(req, input, { bypassMiddleware: true }));
});
tenantRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await Tenant.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
tenantRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Tenant.groupBy(req, input, { bypassMiddleware: true }));
});
tenantRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Tenant.count(req, input, { bypassMiddleware: true }));
});
tenantRouter.post("/createMany", async (req, res) => {
  res.json(await Tenant.createMany(req, req.body, { bypassMiddleware: true }));
});
tenantRouter.post("/createOne", async (req, res) => {
  res.json(await Tenant.createOne(req, req.body, { bypassMiddleware: true }));
});
tenantRouter.post("/deleteMany", async (req, res) => {
  res.json(await Tenant.deleteMany(req, req.body, { bypassMiddleware: true }));
});
tenantRouter.post("/deleteOne", async (req, res) => {
  res.json(await Tenant.deleteOne(req, req.body, { bypassMiddleware: true }));
});
tenantRouter.post("/updateMany", async (req, res) => {
  res.json(await Tenant.updateMany(req, req.body, { bypassMiddleware: true }));
});
tenantRouter.post("/updateOne", async (req, res) => {
  res.json(await Tenant.updateOne(req, req.body, { bypassMiddleware: true }));
});
tenantRouter.post("/upsert", async (req, res) => {
  res.json(await Tenant.upsert(req, req.body, { bypassMiddleware: true }));
});
