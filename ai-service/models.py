from sqlalchemy import Column, Integer, Text, TIMESTAMP
from database import Base

class Lace(Base):
    __tablename__ = "laces"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(Text, nullable=False)
    image_path = Column(Text, nullable=False)
    created_at = Column(TIMESTAMP)

