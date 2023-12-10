docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovay/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t kursovay/app ../..
