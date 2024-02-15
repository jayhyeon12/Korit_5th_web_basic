/**
 * servlet 프로젝트명: product
 * groupId: com.study
 * artifact_Id: product
 * name: product
 * jdk: 11
 * dependencies:
 * 1. lombok
 * 2. jsp
 * 3. gson
 * 4. mysql
 * 
 * 패키지: com.study.product
 *  config - DBConfig
 *  dao - ProductDao
 *  entity - Product
 *  filter - CommonFilter
 *  servlet - InsertProductServlet(/product, Post)
 *          - SearchProductServlet(/products, Get)
 * 
 * DB - db_study
 * table: product_tb
 * product_id, name(유니크), price, size(ss, s, m, l, xl, xxl)
 */