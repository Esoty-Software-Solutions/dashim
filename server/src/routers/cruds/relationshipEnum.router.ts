import { Router, json } from "express";
import { RelationshipEnum } from "@models/relationshipEnum.model";

export const relationshipEnumRouter = Router();

relationshipEnumRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
relationshipEnumRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await RelationshipEnum.aggregate(req, input, { bypassMiddleware: true }));
});
relationshipEnumRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await RelationshipEnum.findFirst(req, input, { bypassMiddleware: true }));
});
relationshipEnumRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await RelationshipEnum.findMany(req, input, { bypassMiddleware: true }));
});
relationshipEnumRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    RelationshipEnum.findMany(req, input),
    RelationshipEnum.count(req, { where: input?.where }),
    RelationshipEnum.count(req),
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
relationshipEnumRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await RelationshipEnum.findUnique(req, input, { bypassMiddleware: true }));
});
relationshipEnumRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await RelationshipEnum.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
relationshipEnumRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await RelationshipEnum.groupBy(req, input, { bypassMiddleware: true }));
});
relationshipEnumRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await RelationshipEnum.count(req, input, { bypassMiddleware: true }));
});
relationshipEnumRouter.post("/createMany", async (req, res) => {
  res.json(await RelationshipEnum.createMany(req, req.body, { bypassMiddleware: true }));
});
relationshipEnumRouter.post("/createOne", async (req, res) => {
  res.json(await RelationshipEnum.createOne(req, req.body, { bypassMiddleware: true }));
});
relationshipEnumRouter.post("/deleteMany", async (req, res) => {
  res.json(await RelationshipEnum.deleteMany(req, req.body, { bypassMiddleware: true }));
});
relationshipEnumRouter.post("/deleteOne", async (req, res) => {
  res.json(await RelationshipEnum.deleteOne(req, req.body, { bypassMiddleware: true }));
});
relationshipEnumRouter.post("/updateMany", async (req, res) => {
  res.json(await RelationshipEnum.updateMany(req, req.body, { bypassMiddleware: true }));
});
relationshipEnumRouter.post("/updateOne", async (req, res) => {
  res.json(await RelationshipEnum.updateOne(req, req.body, { bypassMiddleware: true }));
});
relationshipEnumRouter.post("/upsert", async (req, res) => {
  res.json(await RelationshipEnum.upsert(req, req.body, { bypassMiddleware: true }));
});
