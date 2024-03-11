import { Router, json } from "express";
import { TenantTypeEnum } from "@models/tenantTypeEnum.model";

export const tenantTypeEnumRouter = Router();

tenantTypeEnumRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
tenantTypeEnumRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await TenantTypeEnum.aggregate(req, input, { bypassMiddleware: true }));
});
tenantTypeEnumRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await TenantTypeEnum.findFirst(req, input, { bypassMiddleware: true }));
});
tenantTypeEnumRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await TenantTypeEnum.findMany(req, input, { bypassMiddleware: true }));
});
tenantTypeEnumRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    TenantTypeEnum.findMany(req, input),
    TenantTypeEnum.count(req, { where: input?.where }),
    TenantTypeEnum.count(req),
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
tenantTypeEnumRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await TenantTypeEnum.findUnique(req, input, { bypassMiddleware: true }));
});
tenantTypeEnumRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await TenantTypeEnum.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
tenantTypeEnumRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await TenantTypeEnum.groupBy(req, input, { bypassMiddleware: true }));
});
tenantTypeEnumRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await TenantTypeEnum.count(req, input, { bypassMiddleware: true }));
});
tenantTypeEnumRouter.post("/createMany", async (req, res) => {
  res.json(await TenantTypeEnum.createMany(req, req.body, { bypassMiddleware: true }));
});
tenantTypeEnumRouter.post("/createOne", async (req, res) => {
  res.json(await TenantTypeEnum.createOne(req, req.body, { bypassMiddleware: true }));
});
tenantTypeEnumRouter.post("/deleteMany", async (req, res) => {
  res.json(await TenantTypeEnum.deleteMany(req, req.body, { bypassMiddleware: true }));
});
tenantTypeEnumRouter.post("/deleteOne", async (req, res) => {
  res.json(await TenantTypeEnum.deleteOne(req, req.body, { bypassMiddleware: true }));
});
tenantTypeEnumRouter.post("/updateMany", async (req, res) => {
  res.json(await TenantTypeEnum.updateMany(req, req.body, { bypassMiddleware: true }));
});
tenantTypeEnumRouter.post("/updateOne", async (req, res) => {
  res.json(await TenantTypeEnum.updateOne(req, req.body, { bypassMiddleware: true }));
});
tenantTypeEnumRouter.post("/upsert", async (req, res) => {
  res.json(await TenantTypeEnum.upsert(req, req.body, { bypassMiddleware: true }));
});
