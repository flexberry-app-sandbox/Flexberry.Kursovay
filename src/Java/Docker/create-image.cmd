docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovay-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovay-java/app ../../..
