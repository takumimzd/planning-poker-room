json.room do
  json.id @room.id
  json.total_count @themes.sum(:count)
end

json.themes do
  json.array! @themes.each do |theme|
    json.id theme.id
    json.title theme.title
    json.count theme.count
  end
end