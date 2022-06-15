json.room do
  json.id @room.id
end

json.themes do
  json.array! @themes.each do |theme|
    json.id theme.id
    json.title theme.title
    json.count theme.count
  end
end

json.cards do
  json.array!
    @themes.each do |theme|
      theme.cards.each do |card|
        json.count card.count
    end
  end
end