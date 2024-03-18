def remove_element(obj, element)
  case obj
  when Array
    obj.reject! { |item| element.include?(item) }
    obj.each { |item| remove_element(item, element) if item.is_a?(Hash) || item.is_a?(Array) }
  when Hash
    obj.each do |key, value|
      if element.include?(value)
        obj.delete(key)
      elsif value.is_a?(Hash) || value.is_a?(Array)
        remove_element(value, element)
      end
    end
  end
end

data = {
  'exclude' => {
    'and' => [
      { 'or' => %w[4av6 4qzg_1764] },
      { 'or' => %w[4av8 4qzg_1764] }
    ]
  },
  'include' => {
    'and' => [
      { 'or' => %w[4r3a_1763 60dx 4qzg_1764] },
      { 'or' => %w[4av2 4av3 4qzg_1764] }
    ]
  }
}

remove_element(data, ['4qzg_1764'])
puts data.inspect
