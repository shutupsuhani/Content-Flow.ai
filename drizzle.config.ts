/** @type { import("drizzle-kit").Config } */

export default {
    schema:"./utils/schema.tsx",
    dialect: "postgresql",
    dbCredentials:{
        url:'postgresql://neondb_owner:oyFH6qtQcZJ1@ep-cold-art-a1xx7uz8.ap-southeast-1.aws.neon.tech/AI-ContentGenerator?sslmode=require',
    }


}