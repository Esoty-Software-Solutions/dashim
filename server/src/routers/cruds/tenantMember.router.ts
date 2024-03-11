import { Router, json } from "express";
import { TenantMember } from "@models/tenantMember.model";

export const tenantMemberRouter = Router();

tenantMemberRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
tenantMemberRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await TenantMember.aggregate(req, input, { bypassMiddleware: true }));
});
tenantMemberRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await TenantMember.findFirst(req, input, { bypassMiddleware: true }));
});
tenantMemberRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await TenantMember.findMany(req, input, { bypassMiddleware: true }));
});
tenantMemberRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    TenantMember.findMany(req, input),
    TenantMember.count(req, { where: input?.where }),
    TenantMember.count(req),
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
tenantMemberRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await TenantMember.findUnique(req, input, { bypassMiddleware: true }));
});
tenantMemberRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await TenantMember.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
tenantMemberRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await TenantMember.groupBy(req, input, { bypassMiddleware: true }));
});
tenantMemberRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await TenantMember.count(req, input, { bypassMiddleware: true }));
});
tenantMemberRouter.post("/createMany", async (req, res) => {
  res.json(await TenantMember.createMany(req, req.body, { bypassMiddleware: true }));
});
tenantMemberRouter.post("/createOne", async (req, res) => {
  res.json(await TenantMember.createOne(req, req.body, { bypassMiddleware: true }));
});
tenantMemberRouter.post("/deleteMany", async (req, res) => {
  res.json(await TenantMember.deleteMany(req, req.body, { bypassMiddleware: true }));
});
tenantMemberRouter.post("/deleteOne", async (req, res) => {
  res.json(await TenantMember.deleteOne(req, req.body, { bypassMiddleware: true }));
});
tenantMemberRouter.post("/updateMany", async (req, res) => {
  res.json(await TenantMember.updateMany(req, req.body, { bypassMiddleware: true }));
});
tenantMemberRouter.post("/updateOne", async (req, res) => {
  res.json(await TenantMember.updateOne(req, req.body, { bypassMiddleware: true }));
});
tenantMemberRouter.post("/upsert", async (req, res) => {
  res.json(await TenantMember.upsert(req, req.body, { bypassMiddleware: true }));
});
