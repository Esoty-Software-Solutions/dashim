import { Router, json } from "express";
import { RoleEnum } from "@models/roleEnum.model";

export const roleEnumRouter = Router();

roleEnumRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
roleEnumRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await RoleEnum.aggregate(req, input, { bypassMiddleware: true }));
});
roleEnumRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await RoleEnum.findFirst(req, input, { bypassMiddleware: true }));
});
roleEnumRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await RoleEnum.findMany(req, input, { bypassMiddleware: true }));
});
roleEnumRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    RoleEnum.findMany(req, input),
    RoleEnum.count(req, { where: input?.where }),
    RoleEnum.count(req),
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
roleEnumRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await RoleEnum.findUnique(req, input, { bypassMiddleware: true }));
});
roleEnumRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await RoleEnum.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
roleEnumRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await RoleEnum.groupBy(req, input, { bypassMiddleware: true }));
});
roleEnumRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await RoleEnum.count(req, input, { bypassMiddleware: true }));
});
roleEnumRouter.post("/createMany", async (req, res) => {
  res.json(await RoleEnum.createMany(req, req.body, { bypassMiddleware: true }));
});
roleEnumRouter.post("/createOne", async (req, res) => {
  res.json(await RoleEnum.createOne(req, req.body, { bypassMiddleware: true }));
});
roleEnumRouter.post("/deleteMany", async (req, res) => {
  res.json(await RoleEnum.deleteMany(req, req.body, { bypassMiddleware: true }));
});
roleEnumRouter.post("/deleteOne", async (req, res) => {
  res.json(await RoleEnum.deleteOne(req, req.body, { bypassMiddleware: true }));
});
roleEnumRouter.post("/updateMany", async (req, res) => {
  res.json(await RoleEnum.updateMany(req, req.body, { bypassMiddleware: true }));
});
roleEnumRouter.post("/updateOne", async (req, res) => {
  res.json(await RoleEnum.updateOne(req, req.body, { bypassMiddleware: true }));
});
roleEnumRouter.post("/upsert", async (req, res) => {
  res.json(await RoleEnum.upsert(req, req.body, { bypassMiddleware: true }));
});
